import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class ConversorMonedas {

    private static final Map<String, Double> tasasCambio = new HashMap<>();

    static {
        tasasCambio.put("USD-ARS", 81.175); // Ejemplo de tasa de cambio
        tasasCambio.put("ARS-USD", 0.0123); // Ejemplo de tasa de cambio
        tasasCambio.put("BRL-USD", 0.2034); // Ejemplo de tasa de cambio
        tasasCambio.put("USD-BRL", 4.9145); // Ejemplo de tasa de cambio
        // Agregar más tasas de cambio según sea necesario
    }

    public static double convertirMoneda(double cantidad, String monedaOrigen, String monedaDestino) {
        String clave = monedaOrigen + "-" + monedaDestino;
        if (tasasCambio.containsKey(clave)) {
            return cantidad * tasasCambio.get(clave);
        } else {
            throw new IllegalArgumentException("Conversión no soportada: " + monedaOrigen + " a " + monedaDestino);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        boolean continuar = true;

        System.out.println("Bienvenido al Conversor de Monedas");

        while (continuar) {
            System.out.println("\nSeleccione una opción de conversión:");
            System.out.println("1. USD a ARS");
            System.out.println("2. ARS a USD");
            System.out.println("3. BRL a USD");
            System.out.println("4. USD a BRL");
            System.out.println("5. Salir");

            int opcion = scanner.nextInt();
            scanner.nextLine();  // Consumir el salto de línea

            switch (opcion) {
                case 1:
                    System.out.print("Ingrese el valor que desea convertir de USD a ARS: ");
                    double usdToArs = scanner.nextDouble();
                    double resultadoUsdToArs = convertirMoneda(usdToArs, "USD", "ARS");
                    System.out.printf("%.2f USD son %.2f ARS%n", usdToArs, resultadoUsdToArs);
                    break;
                case 2:
                    System.out.print("Ingrese el valor que desea convertir de ARS a USD: ");
                    double arsToUsd = scanner.nextDouble();
                    double resultadoArsToUsd = convertirMoneda(arsToUsd, "ARS", "USD");
                    System.out.printf("%.2f ARS son %.2f USD%n", arsToUsd, resultadoArsToUsd);
                    break;
                case 3:
                    System.out.print("Ingrese el valor que desea convertir de BRL a USD: ");
                    double brlToUsd = scanner.nextDouble();
                    double resultadoBrlToUsd = convertirMoneda(brlToUsd, "BRL", "USD");
                    System.out.printf("%.2f BRL son %.2f USD%n", brlToUsd, resultadoBrlToUsd);
                    break;
                case 4:
                    System.out.print("Ingrese el valor que desea convertir de USD a BRL: ");
                    double usdToBrl = scanner.nextDouble();
                    double resultadoUsdToBrl = convertirMoneda(usdToBrl, "USD", "BRL");
                    System.out.printf("%.2f USD son %.2f BRL%n", usdToBrl, resultadoUsdToBrl);
                    break;
                case 5:
                    continuar = false;
                    System.out.println("Gracias por usar el Conversor de Monedas. ¡Hasta luego!");
                    break;
                default:
                    System.out.println("Opción no válida. Intente nuevamente.");
                    break;
            }
        }

        scanner.close();
    }
}
