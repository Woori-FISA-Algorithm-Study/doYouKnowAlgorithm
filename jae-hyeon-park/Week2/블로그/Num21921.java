import java.io.*;
import java.util.*;

public class Num21921 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		int N =  Integer.parseInt(st.nextToken());  //주어지는 일수
		int X =   Integer.parseInt(st.nextToken()); //확인 일수
		
		 st = new StringTokenizer(bf.readLine());
		 
		 int [] visit = new int[N]; //방문자 수
		 
		 for(int i=0; i<N; i++) {
			 visit[i] = Integer.parseInt(st.nextToken());
		 }
		 
		 int maxVisit = 0;
		 int count = 0;
		 
		 for(int i=0; i<X; i++) {// 초기 윈도우
			 maxVisit += visit[i];
			 
		 }
		 count++; //첫번째는 무조건 카운트
		 int sumVisit = maxVisit; //방문 합산
		 
		 
		 for(int i=1; i<=N-X; i++) {
			 sumVisit -= visit[i-1];
			 sumVisit += visit[i+X-1];
			 
			 if(sumVisit == maxVisit) {
				 count ++;
			 }
			 else if(sumVisit > maxVisit) {
				 maxVisit = sumVisit;
				 count = 1;
			 }
		 }
		 
		 if(maxVisit == 0) {
			 System.out.println("SAD");
		 }
		 else {
			 System.out.println(maxVisit);
			 System.out.println(count);
		 }

	}

}