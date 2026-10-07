from regras import subtotal_item


def main():
    total = subtotal_item(300, 2) + subtotal_item(800, 2)
    print("Subtotal em centavos:", total)


if __name__ == "__main__":
    main()
