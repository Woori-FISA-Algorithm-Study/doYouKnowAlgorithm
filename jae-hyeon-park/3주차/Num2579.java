import java.io.*;

public class Num2579 {
	static Long[] dp;
	//static boolean isOneStair = false; 
	static int[] P;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(bf.readLine());
		P = new int [N+1]; //구해야하는 값의 모임 -> p(값)의 값들
		P[0] = 0;
		
		for(int i=1; i<N+1; i++) {
			P[i] = Integer.parseInt(bf.readLine());
		}
		dp = new Long [N+1];
		
		dp[0] = 0L;
		dp[1] = (long) P[1];
		
		if(N>1) {
		dp[2] = (long) (P[1] + P[2]);
		}
		//Index -1 out of bounds for length 7 방지 -> dp[2]= num-3은 음수되기에 조치 ,
		//dp[3]의 경우 dp[1]은 상관X, P[2]+dp[0]이기에 문제 없음, dp[4] = dp[2]or P[3]+dp[1]이라 문제 X
		
		System.out.println(check(N));
		

	}
	
	static long check(int num) {
		if(dp[num]==null) {//확인안한 dp의 경우
			 dp[num] = Math.max(check(num-2), P[num-1] + check(num-3)) + P[num]; //num-2는 상관없지만 세칸연속 하는것은 불가능이므로 만약 num-1의 층의 값을 더하면 두칸 밑인 num-3의 dp가 따라와야함
		}
		
		
		return dp[num];
		
	}

}