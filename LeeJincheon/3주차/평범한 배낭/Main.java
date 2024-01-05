import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] inputArr = br.readLine().split(" ");
        int n = Integer.parseInt(inputArr[0]);
        int k = Integer.parseInt(inputArr[1]);

        int[] dp = new int[k+1];

        for (int i=0; i<n; i++) {
            inputArr = br.readLine().split(" ");
            int w = Integer.parseInt(inputArr[0]);
            int v = Integer.parseInt(inputArr[1]);

            for (int j=k; j>=w; j--) {
                dp[j] = Math.max(dp[j-w]+v, dp[j]);
            }
        }

        System.out.println(dp[k]);
    }
}
