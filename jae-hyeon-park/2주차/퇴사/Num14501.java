
import java.io.*;
import java.util.*;

public class Num14501 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int days = Integer.parseInt(bf.readLine());

		StringTokenizer st ;
		int [] t = new int [days+1]; //소요일  헷가려서 1일은 1의 인덱스에 하기위해 +1 추가
		int [] p = new int [days+1]; //금액
		
		
		for(int i=1; i<days+1; i++) {
			st = new StringTokenizer(bf.readLine());
			t[i] = Integer.parseInt(st.nextToken());
			p[i] = Integer.parseInt(st.nextToken());
			
		}
		
		int[] dp = new int[days+2]; //시작한 날짜에 따른 금액을 얻기 위함 , 1463문제를 풀고나니 +1이 아닌 +2를 해야 인덱스로 인한 1, 다음 초과?하는 일수 체크를 위한 1이 필요하다 느낌
		
		dp[days+1] = 0; //일할수있는 날의 다음날은 0으로 설정 하여 더 해도 의미없게하기위해 인덱스 확인 잘해야함 크기가 아닌 인덱스이기에 기간이 7일이면 8일은 0으로
				
		for(int i=days; i>0; i--) { //앞에서부터 하려했는데 33번줄을 보면 dp[i] = dp[i+1]; 부분이 이미 안정해진것을 옮기기에 숫자가 이상해짐
			
			if(i+t[i]>days+1) { //해당 날짜 + 소요 일수가 주어진 일수보다 크면 해당일은 못하기에 하루 쉬고 다음 날꺼 확인 필요, 예제 1번의 경우엔 days만해도 가능인데 마지막 날짜에 일하는 것도 포함했어야해서 +1 필요
				//System.out.println(i); ->확인용
				dp[i] = dp[i+1];
			}
			else {
				dp[i] = Math.max(dp[i+1], dp[i+t[i]] + p[i]); //다음날꺼랑 현재 날짜의 비교해서 더 잘버는 거 고르는것
			}
		}
		
		System.out.println(dp[1]);

	}

}
