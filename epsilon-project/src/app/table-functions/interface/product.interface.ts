export interface Product {
    name: string,
    price: string,
    category: category
}

enum category {
    Premium = "Premium",
    Signature = "Signature",
    Standard = "Standard"
}