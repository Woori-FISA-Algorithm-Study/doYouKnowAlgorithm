import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        // 입력 받는 부분
        int n = Integer.parseInt(br.readLine());
        int[] times = new int[n+1];
        int[] pays = new int[n+1];

        for(int i=0; i<n; i++) {
            String[] input = br.readLine().split(" ");
            times[i] = Integer.parseInt(input[0]);
            pays[i] = Integer.parseInt(input[1]);
        }

        int[] dp = new int[n+1];

        for(int i=0; i<n; i++) {
            if(i+times[i] <= n) {
                dp[i+times[i]] = Math.max(dp[i+times[i]], dp[i]+pays[i]);
            }
            dp[i+1] = Math.max(dp[i+1], dp[i]);
        }

        System.out.println(dp[n]);
    }
}
