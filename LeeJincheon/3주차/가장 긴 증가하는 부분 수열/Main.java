import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        String[] numbers = br.readLine().split(" ");

        int[] dp = new int[n];
        dp[0] = 1;
        int result = 1;

        for (int i=1; i<n; i++) {
            int max = 0;
            for (int j=i-1; j>=0; j--) {
                if (Integer.parseInt(numbers[j]) < Integer.parseInt(numbers[i]) && dp[j] > max) {
                    max = dp[j];
                }
            }
            dp[i] = max + 1;
            if (dp[i] > result) {
                result = dp[i];
            }
        }

        System.out.println(result);
    }
}
