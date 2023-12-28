
import java.io.*;

public class Num1463 {
	
	static Integer[] dp; //양쪽에서 사용하게

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int num = Integer.parseInt(bf.readLine());
		
		dp = new Integer[num+1];
		
		dp[0] = 0;
		dp[1] = 0;
		
		System.out.println(check(num));

	}
	
	static int check(int num) {
		if(dp[num]==null) { //확인안한 dp의 경우
			if(num%6==0) {
				dp[num] = Math.min(Math.min(check(num/3), check(num/2)), (num-1)) + 1; //생각 해보니 6의 배수의 경우엔 3과 2중 어떤게 효율적인지 판단을 안해둠 그냥 냅두면 3나누는거에서만 걸러져서 문제발생
			}
			
			else if(num%3==0) {
				dp[num] = Math.min(check(num/3), check(num-1)) + 1; //가장 숫자가 작게 나오는 것으로 재귀를 돌게하고 카운트 +1; 추가:num-1보다 num/3이나 2 하는걸 먼저해야 시간초과가 안남
				// 느낌상 큰값으로 먼저 소거하기 때문 아닐까 싶음
			}
			else if(num%2==0) {
				dp[num] = Math.min(check(num/2), check(num-1)) + 1; //가장 숫자가 작게 나오는 것으로 재귀를 돌게하고 카운트 +1;
			}
			else {
				dp[num] = check(num-1) + 1;
			}
		}
		
		return dp[num];
		
	}

}
