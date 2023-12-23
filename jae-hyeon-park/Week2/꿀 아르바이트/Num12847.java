import java.io.*;
import java.util.*;

public class Num12847 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		StringTokenizer st = new StringTokenizer(bf.readLine());
		
		int s = Integer.parseInt(st.nextToken());
	    int p = Integer.parseInt(st.nextToken());
	    
	    st = new StringTokenizer(bf.readLine());
	    
	    int[] salarys = new int[s]; //전체 날짜 마다 받는 급여
	    
	    for(int i=0; i<s; i++) { //각 날의 급여 넣기
	    	salarys[i] = Integer.parseInt(st.nextToken());
	    }
	    
	    long checkSalary = 0; //부분의 총 급여 확인용
	    
	    for(int i=0; i<p ;i++) { //첫번째 슬라이딩 윈도우 총 급여 전체 더한값
	    	checkSalary += salarys[i];
	    }
	    
	    long result = checkSalary; //결과값 -> 급여확인후 기존보다 크면 결과값 변경용
	    
	    for(int i=1; i<=s-p; i++) { //예제 기준 1~3 index까지 하는걸로 시작해서 계속 비교 과정
	    	checkSalary -= salarys[i-1];
	    	checkSalary += salarys[i+p-1];
	    	
	    	if(checkSalary>result) result = checkSalary;
	    }
	    
	    System.out.println(result);

	}

}