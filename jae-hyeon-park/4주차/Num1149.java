import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num1149 {
	static Integer[][] dp; //Integer로 인하여 null 값을 확인이 가능하지만 n+1개수로 치면 0번째 RGB 전부를 0으로 해줘야함
	static int [][] num;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		num = new int[n][3]; //비용 모은것
		
		for(int i=0; i<n; i++) {
			StringTokenizer st = new StringTokenizer(bf.readLine());
			for(int j=0; j<3; j++) {
				num[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		dp = new Integer[n][3]; //비용의 최솟값
		
		dp[0][0] = num[0][0];
		dp[0][1] = num[0][1];
		dp[0][2] = num[0][2];
		
		int max = 0;
		
		max = Math.min( Math.min(check(n-1,0) , check(n-1,1)) , check(n-1,2));
		
		System.out.println(max);
		

	}
	
	public static int check(int n, int color) {
		
		if(dp[n][color] == null) { //비어있는지 확인
			if(color == 0) { // 직전의 1과 2비교
				dp[n][color] = Math.min(check(n-1,1), check(n-1,2)) + num[n][color];
			}
			else if(color == 1) {// 직전의 0과 2비교
				dp[n][color] = Math.min(check(n-1,0), check(n-1,2)) + num[n][color];
			}
			else {// 직전의 0과 1비교
				dp[n][color] = Math.min(check(n-1,0), check(n-1,1)) + num[n][color];
			}
			
		}
		
		
		return dp[n][color];
	}

}
