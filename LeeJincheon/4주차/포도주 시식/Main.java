import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());
        int[] wine = new int[n+1];

        for (int i=1; i<=n; i++) {
            wine[i] = Integer.parseInt(br.readLine());
        }

        if (n == 1) {
            System.out.println(wine[1]);
        } else if (n == 2) {
            System.out.println(wine[1] + wine[2]);
        } else {
            int[] dp = new int[n+1];
            dp[1] = wine[1];
            dp[2] = wine[1] + wine[2];

            int max = dp[2];

            for (int i=3; i<=n; i++) {
                dp[i] = Math.max(dp[i-1], Math.max(wine[i-1]+dp[i-3], dp[i-2])+wine[i]);
                max = Math.max(max, dp[i]);
            }


            System.out.println(max);
        }
    } // main
}