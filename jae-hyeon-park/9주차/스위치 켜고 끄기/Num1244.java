import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num1244 {
	static int N;
	static int[] arr;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		N = Integer.parseInt(bf.readLine());
		arr = new int[N+1];
		
		String[] a = bf.readLine().split(" ");
		
		for(int i=1; i<N+1;i++) {
			arr[i] = Integer.parseInt(a[i-1]);
		}
		int person = Integer.parseInt(bf.readLine());
		
		for(int i=0; i<person; i++) {
			String[] b = bf.readLine().split(" ");
			if(b[0].equals("1")) 
				isMan(Integer.parseInt(b[1]));
			
			else 
				isWoman(Integer.parseInt(b[1]));
			
			
		}
		
		int count=0;
		StringBuilder sb =new StringBuilder();
		
		for(int i=1; i<=N; i++) {
			
			sb.append(arr[i] + " ");
			count++;
			if(count==20) {
				System.out.println(sb);
				sb.setLength(0);
				count=0;
			}
			else if(i==N) {
				System.out.println(sb);
			}
		}

	}
	
	
	static void isMan(int num) {
		int result  = N/num;
		
		for(int i=1; i<=result; i++) {
			if(arr[i*num] == 0) {
				arr[i*num] = 1;
			}
			else {
				arr[i*num] = 0;
			}
		}
		
	}
	
	static void isWoman(int num) {
		int count=0;
		
		while(true) {
			if(num-(count+1)==0 || num+(count+1)>N)
				break;
			
			if(arr[num-(count+1)] == arr[num+(count+1)])
				count++;
			else
				break;
			
		}
		
		if(arr[num] == 0) {
			arr[num] = 1;
		}
		else {
			arr[num] = 0;
		}
		
		for(int i=1; i<=count; i++) {
			if(arr[num-i] ==0) {
				arr[num-i] =1;
				arr[num+i]=1;
			}
			else {
				arr[num-i] =0;
				arr[num+i]=0;
			}
			
			
			
		}
		
	}
	

}
