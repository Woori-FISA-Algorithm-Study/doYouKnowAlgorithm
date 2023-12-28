import java.io.*;
import java.util.*;
public class Num1182 {
	static int N;
	static int S;
	static int [] arr ;
	static int count = 0;


	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		N =  Integer.parseInt(st.nextToken());  //주어지는 개수
		S =   Integer.parseInt(st.nextToken()); //합산
		
		st = new StringTokenizer(bf.readLine());
		
		arr = new int[N];
		
		for(int i=0; i< N; i++) {
			arr[i] = Integer.parseInt(st.nextToken());
		}
		
		check(0,0);
		
		System.out.println(count-1); //처음 시작이 0이라서 하나 빼줌
		

	}
	
	static public void check(int index, int sum) { //요소중 0 있을 가능성-> 중간에 합산이 맞아도 끝까지 체크해봐야함
		if(index==N) {
			if(sum==S) {
				count++;
				}
			return;
		}
		
		
		check(index+1, sum+arr[index]); //해당 요소 더하는 경우 -> 계속해서 증식하는 것이기에 마지막까지 봐야함 개수가 2의n승이 나오면서 마지막 index 갔을때 합산 확인
		check(index+1, sum); // 해당요소 스킵하는 경우
	}

}
