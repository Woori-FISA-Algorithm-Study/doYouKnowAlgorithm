import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num2156 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(bf.readLine());
		
		int[] drink = new int[n+1];
		
		for(int i=1; i<n+1; i++) {
			drink[i] = Integer.parseInt(bf.readLine());
		}
		
		Integer[] dp = new Integer[n+1];
		
		dp[0] = 0;
		dp[1] = drink[1];
		if(n>1)
			dp[2] = drink[1]+ drink[2];
		
		for(int i =3; i<n+1; i++) {
			if(dp[i]==null) {
				dp[i] = Math.max( Math.max(dp[i-1], drink[i]+ dp[i-2]), drink[i]+drink[i-1]+dp[i-3]);
			}
		}
		
//		int max = 0;
//		
//		for(int i =1; i<=n ; i++) {
//			max = Math.max(max, dp[i]);
//		}
		
		System.out.println(dp[n]);
		
		

	}

}
