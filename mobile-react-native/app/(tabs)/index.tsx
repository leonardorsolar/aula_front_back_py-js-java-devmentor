import { Image } from "expo-image"
import { useEffect, useMemo, useState } from "react"
import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native"

type Backend = "node" | "python" | "java" | "mock"

type Product = {
    id: number
    name: string
    price: number
    image_url?: string
}

type CartItem = Product & { image: string }

const BACKEND_URLS: Record<Exclude<Backend, "mock">, string> = {
    node: "http://localhost:3000",
    java: "http://localhost:8080/api",
    python: "http://localhost:4000",
}

const FALLBACK_IMAGES = [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
    "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600",
    "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=600",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
]

const MOCK_PRODUCTS: Product[] = [
    { id: 1, name: "Teclado Mecânico RGB", price: 349.9 },
    { id: 2, name: 'Monitor 4K UltraWide 32"', price: 2199.0 },
    { id: 3, name: "SSD NVMe 1TB", price: 499.9 },
    { id: 4, name: "Fone Noise Cancelling", price: 899.0 },
]

export default function HomeScreen() {
    const [backend, setBackend] = useState<Backend>("mock")
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [cart, setCart] = useState<CartItem[]>([])
    const [cartVisible, setCartVisible] = useState(false)
    const [search, setSearch] = useState("")

    const filteredProducts = useMemo(() => {
        const term = search.trim().toLowerCase()
        if (!term) return products
        return products.filter((product) =>
            product.name.toLowerCase().includes(term),
        )
    }, [products, search])

    const cartTotal = useMemo(
        () => cart.reduce((sum, item) => sum + item.price, 0),
        [cart],
    )

    useEffect(() => {
        void fetchProducts(backend)
    }, [backend])

    async function fetchProducts(currentBackend: Backend) {
        setLoading(true)

        if (currentBackend === "mock") {
            setProducts(MOCK_PRODUCTS)
            setLoading(false)
            return
        }

        try {
            const response = await fetch(
                `${BACKEND_URLS[currentBackend]}/products`,
            )
            if (!response.ok) throw new Error("Erro ao carregar produtos")

            const data = (await response.json()) as Record<string, unknown>[]
            const normalized: Product[] = data.map((item, index) => ({
                id: Number(item.id ?? index + 1),
                name: String(item.name ?? item.title ?? `Produto ${index + 1}`),
                price: Number(item.price ?? 0),
                image_url:
                    typeof item.image_url === "string"
                        ? item.image_url
                        : typeof item.image === "string"
                          ? item.image
                          : undefined,
            }))

            setProducts(normalized)
        } catch {
            setProducts(MOCK_PRODUCTS)
        } finally {
            setLoading(false)
        }
    }

    function addToCart(product: Product, index: number) {
        const image =
            product.image_url || FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
        setCart((prev) => [...prev, { ...product, image }])
    }

    function removeItem(index: number) {
        setCart((prev) => prev.filter((_, i) => i !== index))
    }

    async function checkout() {
        if (cart.length === 0) return

        const orderData = { total: cartTotal }

        if (backend !== "mock") {
            try {
                await fetch(`${BACKEND_URLS[backend]}/orders`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(orderData),
                })
            } catch {
                // Ignora falhas do backend para não bloquear o fluxo do app.
            }
        }

        setCart([])
        setCartVisible(false)
        Alert.alert("Pedido confirmado!", "Obrigado pela sua compra.")
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={styles.logo}>produtos.com.br</Text>

                <View style={styles.searchRow}>
                    <TextInput
                        value={search}
                        onChangeText={setSearch}
                        style={styles.searchInput}
                        placeholder='Buscar produtos...'
                        placeholderTextColor='#7d7d7d'
                    />
                    <Pressable
                        style={styles.cartButton}
                        onPress={() => setCartVisible(true)}
                    >
                        <Text style={styles.cartButtonText}>
                            🛒 {cart.length}
                        </Text>
                    </Pressable>
                </View>

                <View style={styles.backendRow}>
                    {(["mock", "node", "python", "java"] as Backend[]).map(
                        (item) => (
                            <Pressable
                                key={item}
                                style={[
                                    styles.backendBtn,
                                    backend === item && styles.backendBtnActive,
                                ]}
                                onPress={() => setBackend(item)}
                            >
                                <Text
                                    style={[
                                        styles.backendBtnText,
                                        backend === item &&
                                            styles.backendBtnTextActive,
                                    ]}
                                >
                                    {item.toUpperCase()}
                                </Text>
                            </Pressable>
                        ),
                    )}
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.pageTitle}>Resultados</Text>

                {loading ? (
                    <View style={styles.loadingBox}>
                        <ActivityIndicator size='large' color='#131921' />
                    </View>
                ) : (
                    <View style={styles.grid}>
                        {filteredProducts.map((product, index) => {
                            const image =
                                product.image_url ||
                                FALLBACK_IMAGES[index % FALLBACK_IMAGES.length]
                            return (
                                <View key={product.id} style={styles.card}>
                                    <Image
                                        source={{ uri: image }}
                                        style={styles.cardImage}
                                        contentFit='contain'
                                    />
                                    <Text
                                        style={styles.cardTitle}
                                        numberOfLines={2}
                                    >
                                        {product.name}
                                    </Text>
                                    <Text style={styles.cardRating}>★★★★☆</Text>
                                    <Text style={styles.cardPrice}>
                                        R${" "}
                                        {product.price
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </Text>
                                    <Pressable
                                        style={styles.addBtn}
                                        onPress={() =>
                                            addToCart(product, index)
                                        }
                                    >
                                        <Text style={styles.addBtnText}>
                                            Adicionar ao carrinho
                                        </Text>
                                    </Pressable>
                                </View>
                            )
                        })}
                    </View>
                )}
            </ScrollView>

            <Modal
                visible={cartVisible}
                transparent
                animationType='fade'
                onRequestClose={() => setCartVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Carrinho</Text>
                            <Pressable onPress={() => setCartVisible(false)}>
                                <Text style={styles.closeText}>✕</Text>
                            </Pressable>
                        </View>

                        <ScrollView style={styles.modalBody}>
                            {cart.length === 0 ? (
                                <Text style={styles.emptyText}>
                                    Seu carrinho está vazio.
                                </Text>
                            ) : (
                                cart.map((item, index) => (
                                    <View
                                        key={`${item.id}-${index}`}
                                        style={styles.cartItem}
                                    >
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.cartItemImage}
                                            contentFit='contain'
                                        />
                                        <View style={styles.cartItemInfo}>
                                            <Text numberOfLines={2}>
                                                {item.name}
                                            </Text>
                                            <Text style={styles.cartItemPrice}>
                                                R${" "}
                                                {item.price
                                                    .toFixed(2)
                                                    .replace(".", ",")}
                                            </Text>
                                            <Pressable
                                                onPress={() =>
                                                    removeItem(index)
                                                }
                                            >
                                                <Text style={styles.removeText}>
                                                    Excluir
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                ))
                            )}
                        </ScrollView>

                        <View style={styles.modalFooter}>
                            <Text style={styles.totalText}>
                                Total: R${" "}
                                {cartTotal.toFixed(2).replace(".", ",")}
                            </Text>
                            <Pressable
                                style={styles.checkoutBtn}
                                onPress={() => void checkout()}
                            >
                                <Text style={styles.checkoutText}>
                                    Finalizar compra
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#eaeded",
    },
    header: {
        backgroundColor: "#131921",
        paddingHorizontal: 14,
        paddingTop: 54,
        paddingBottom: 14,
        gap: 10,
    },
    logo: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "800",
    },
    searchRow: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    searchInput: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 15,
    },
    cartButton: {
        backgroundColor: "#febd69",
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    cartButtonText: {
        color: "#0F1111",
        fontWeight: "700",
    },
    backendRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    backendBtn: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.35)",
    },
    backendBtnActive: {
        backgroundColor: "#febd69",
        borderColor: "#febd69",
    },
    backendBtnText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "700",
    },
    backendBtnTextActive: {
        color: "#0F1111",
    },
    content: {
        padding: 12,
        paddingBottom: 32,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 12,
        color: "#0F1111",
    },
    loadingBox: {
        minHeight: 280,
        alignItems: "center",
        justifyContent: "center",
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10,
    },
    card: {
        width: "48%",
        backgroundColor: "#fff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        padding: 10,
        gap: 6,
    },
    cardImage: {
        width: "100%",
        height: 130,
        backgroundColor: "#fafafa",
        borderRadius: 6,
    },
    cardTitle: {
        fontSize: 14,
        minHeight: 36,
        color: "#0F1111",
    },
    cardRating: {
        color: "#ffa41c",
        fontSize: 13,
    },
    cardPrice: {
        fontSize: 18,
        fontWeight: "800",
        color: "#0F1111",
    },
    addBtn: {
        marginTop: 6,
        backgroundColor: "#ffd814",
        borderRadius: 20,
        paddingVertical: 8,
        alignItems: "center",
    },
    addBtnText: {
        color: "#0F1111",
        fontSize: 13,
        fontWeight: "700",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        padding: 16,
    },
    modalContent: {
        backgroundColor: "#fff",
        borderRadius: 12,
        maxHeight: "80%",
        overflow: "hidden",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "700",
    },
    closeText: {
        fontSize: 18,
        fontWeight: "700",
    },
    modalBody: {
        paddingHorizontal: 14,
    },
    emptyText: {
        textAlign: "center",
        paddingVertical: 30,
        color: "#6d6d6d",
    },
    cartItem: {
        flexDirection: "row",
        gap: 12,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#f1f1f1",
    },
    cartItemImage: {
        width: 64,
        height: 64,
    },
    cartItemInfo: {
        flex: 1,
        gap: 4,
    },
    cartItemPrice: {
        fontWeight: "700",
        color: "#B12704",
    },
    removeText: {
        color: "#007185",
        textDecorationLine: "underline",
        fontSize: 13,
    },
    modalFooter: {
        borderTopWidth: 1,
        borderTopColor: "#eee",
        padding: 14,
        gap: 10,
    },
    totalText: {
        fontWeight: "800",
        fontSize: 16,
        textAlign: "right",
    },
    checkoutBtn: {
        backgroundColor: "#ffd814",
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: "center",
    },
    checkoutText: {
        color: "#0F1111",
        fontWeight: "800",
    },
})
