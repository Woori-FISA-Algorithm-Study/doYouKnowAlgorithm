import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num1051 {
	static int N,M;
	static int[][] arr;
	static int result=0;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		String[] a = br.readLine().split(" ");
		N = Integer.parseInt(a[0]);
		M = Integer.parseInt(a[1]);
		
		arr= new int[N][M];
		
		for(int i=0; i<N; i++) {
			String b = br.readLine();
			for(int j=0; j<M; j++) {
				arr[i][j] = Character.getNumericValue(b.charAt(j));
			}
		}
		
		if(N>M) {
			for(int i=N; i>0; i--) {
				check(i);
				if(result !=0)
					break;
			}
		}
		else {
			for(int i=M; i>0; i--) {
				check(i);
				if(result !=0)
					break;
			}
		}
		
		System.out.println(result);

	}
	
	static void check(int num) {
		if(num ==1) {
			result = 1;
			return ;
		}
		
		for(int i=0; i<=N-num; i++) {
			
			for(int j=0; j<=M-num; j++) {
				if(arr[i][j]== arr[i][j+num-1] && arr[i][j]== arr[i+num-1][j] && arr[i][j]== arr[i+num-1][j+num-1]) {
					result = num * num;
					return;
				}
				
			}
				
		}
		
		
	}

}
