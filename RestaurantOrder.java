 class MenuItem {
    String name;
    double basePrice;

    MenuItem(String name, double basePrice) {
        this.name = name;
        this.basePrice = basePrice;
    }

     double calculatePrice() {
        return basePrice;
    }

    void display() {
        System.out.println(name + " costs ₹" + calculatePrice());
    }
}

 class Pizza extends MenuItem {
    boolean extraCheese;

    Pizza(String name, double basePrice, boolean extraCheese) {
        super(name, basePrice);
        this.extraCheese = extraCheese;
    }

    @Override
    double calculatePrice() {
        return extraCheese ? basePrice + 50 : basePrice;
    }
}

 class Beverage extends MenuItem {
    boolean isLarge;

    Beverage(String name, double basePrice, boolean isLarge) {
        super(name, basePrice);
        this.isLarge = isLarge;
    }

    @Override
    double calculatePrice() {
        return isLarge ? basePrice * 1.5 : basePrice;
    }
}

 public class RestaurantOrder {
    public static void main(String[] args) {
        MenuItem item1 = new Pizza("Margherita Pizza", 250, true);
        MenuItem item2 = new Beverage("Cold Coffee", 120, false);
        MenuItem item3 = new Beverage("Lemon Iced Tea", 100, true);

        item1.display(); 
        item2.display();
        item3.display();
    }
}
