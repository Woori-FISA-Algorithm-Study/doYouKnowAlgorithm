import java.io.*;
import java.util.StringTokenizer;

public class Num11053 {
	static Integer[] dp; //null값을 처리하기 위해선 Integer타입으로 해야함 int는 메모리에 저장하는 단일 목적으로만 쓰여진다함
	static int[] A;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(bf.readLine());
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		A = new int [N];
		
		for(int i=0; i<N; i++) {
			A[i] = Integer.parseInt(st.nextToken());
		}
		
		dp = new Integer[N];
		
		for(int i=0; i<N;i++) {// 모든 dp 채우고
			check(i);
		}
		
		int max = dp[0];
		
		for(int i=1; i<N; i++) {
			max = Math.max(max, dp[i]);
		}
		
		System.out.println(max);

	}
	
	static int check(int num) {
		if(dp[num]==null) { //이전에 해당 번째의 숫자가 앞서 다른 앞 순서의 값에 의해 확인이 안된경우 
			dp[num] = 1; //해당 숫자가 첫번째로 스타트할 가능성
			
			for(int i= num-1; i>=0; i--) {// 본인 위치보다 낮은 순서의 값들을 비교하여 본인 값보다 작은경우 확인
				if(A[num]>A[i]) {
					dp[num] = Math.max(dp[num], check(i)+1); //본인(해당값)이 스타트를 해서 체크하는게 큰지, 본인 보다 작은 순번에 있는 숫자의 다음으로 한것이 큰지 확인후 큰값으로 따라가기
																// 이후에는 본인의 바로 직전의 값 다음으로하는게 나은지, 아니면 새로 만난 본인보다 작은 값을 따라서 하는 값이 큰지 확인
				}
				
			}
			
		}
		
		
		return dp[num];
	}

}