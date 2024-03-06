import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num1932 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		int num[][] = new int[n+1][n+1]; //각 노드의 수
		
		
		
		for(int i=1; i<n+1; i++) {
			StringTokenizer st = new StringTokenizer(bf.readLine());
			for(int j=1; j<=i; j++) {
				num[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		int dp[][] = new int[n+1][n+1]; // 해당 노드의 최대값
		
		for(int i=1; i<n+1; i++) { //첫 스타트의 경우 dp[0][0~n] 까지 0이라 본인 노드만 +하면 가능
			
			for(int j=1; j<=i; j++) {
				dp[i][j]= Math.max(dp[i-1][j-1], dp[i-1][j]) + num[i][j]; //위에 연결된 노드 중 가장 max값을 선정하고 거기에 자기 값을 더한 것
			}
		}
		
		int max = 0;
		
		for(int i=1; i<n+1; i++) {
			max = Math.max(max, dp[n][i]);
		}
		
		System.out.println(max);

	}

}
