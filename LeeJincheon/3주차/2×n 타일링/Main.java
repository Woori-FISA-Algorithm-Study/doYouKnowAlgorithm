import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int[] dp = new int[n+1];
        
        for(int i=1; i<=n; i++) {
            if(i<3) {
                dp[i] = i;
            } else {
                dp[i] = (dp[i-1] + dp[i-2])%10007;
            }
        }

        System.out.println(dp[n]%10007);
    }
}