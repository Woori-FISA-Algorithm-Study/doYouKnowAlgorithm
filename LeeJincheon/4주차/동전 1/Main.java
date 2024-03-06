import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] input = br.readLine().split(" ");
        int n = Integer.parseInt(input[0]);
        int k = Integer.parseInt(input[1]);

        int[] coin_value = new int[n];
        for (int i=0; i<n; i++) {
            coin_value[i] = Integer.parseInt(br.readLine());
        }

        int[] dp = new int[k+1];
        // dp[j] = 가치의 합이 j원일 때의 경우의 수
        for (int i=0; i<n; i++) {
            for (int j=1; j<=k; j++) {
                if (coin_value[i] == j) {
                    dp[j]++;
                } else if (coin_value[i] < j) {
                    dp[j] += dp[j-coin_value[i]];
                }
            }
        }

        // idx: 0 1 2 3 4 5 6 7 8 9 10
        // dp : 0 1 1 1 1 1 1 1 1 1 1
        //          2 2 3 3 4 4 5 5 6
        //                4 5 6 7 8 10


        System.out.println(dp[k]);
    } //main
}