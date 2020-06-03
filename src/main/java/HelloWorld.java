public class HelloWorld {
    public static void main(String[] args){
        new Thread(() -> {
            try{
                Thread.sleep(2000);
                System.out.println("World");
            } catch (InterruptedException e) {
                e.printStackTrace(System.err);
            }
        }).start();

        System.out.println("Hello");
    }
}


