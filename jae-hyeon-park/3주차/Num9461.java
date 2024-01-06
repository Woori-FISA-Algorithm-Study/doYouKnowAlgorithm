import java.io.*;

public class Num9461 {
	static Long[] dp; 

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		
		int T = Integer.parseInt(bf.readLine());
		int[] P = new int [T+1]; //구해야하는 값의 모임 -> p(값)의 값들
		
		
		for(int i=1; i<T+1 ; i++) {
			P[i] = Integer.parseInt(bf.readLine());
			
			
		}
		
		
		dp = new Long[101]; //1부터 ~ 구해야하는 가장 큰수, dp = 100까지 가게 되면 수가 엄청 커지기에 L로 바꾸니 가능해짐
		dp[0] = 0L;
		dp[1] = 1L;
		dp[2] = 1L;
		dp[3] = 1L;
		
//		for(int i=1; i<4; i++) { // 1~3 = 1  -----> 이게 아니라 밑에 더한 식으로 했어야함 첨엔 N = (N-5) + (N-1)
//			dp[i] = 1;
//		}
//		for(int i=4; i<6; i++) {// 4~5 = 2
//			dp[i] = 2;
//		}
		
		for(int i=1; i<T+1; i++) {
			check(P[i]);
		}

	}
	
	static void check(int num) {
		if(dp[num]==null) { //확인안한 dp의 경우
			for(int i=4; i<num+1; i++) {
				dp[i] = dp[i-2] + dp[i-3];
			}
		}
		System.out.println(dp[num]);
		
		return ;
		
	}

}
