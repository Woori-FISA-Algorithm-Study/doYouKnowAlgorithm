import java.io.*;

public class Num11726 {
	static Integer[] dp; 

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		dp = new Integer[n+1];
		
		dp[0]=0;
		dp[1]=1;
		 if(n>1)
				dp[2]=2;
		
		System.out.println(check(n));

	}
	
	static int check(int num) {
		if(dp[num]==null) { //이전에 해당 번째의 숫자가 앞서 다른 앞 순서의 값에 의해 확인이 안된경우 
			dp[num] = (check(num-1) + check(num-2)) %10007;
			
			
		}
		
		return dp[num];
	}

}