import java.io.*;
import java.util.*;

public class Num12891 {
    public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());

        int s = Integer.parseInt(st.nextToken());
        int p = Integer.parseInt(st.nextToken());

        char[] inValue = bf.readLine().toCharArray(); //들어온 값을 하나씩 넣기

        int[] conditionAlpha =  {0, 0, 0, 0}; //필수 알파벳 개수 들어갈것 A,C,G,T 순 1001

        //int count = 0; //acgt가 모두 원하는 값만큼 달성했는지 확인용
        
        int result = 0;

        st = new StringTokenizer(bf.readLine());

        for(int i=0;i<4;i++){
            conditionAlpha[i] = Integer.parseInt(st.nextToken()); //필수 알파벳 개수 넣기           
        }
        
        int[] checkAlpha = {0,0,0,0}; //[비교할 배열

        
       for(int i=0; i<p; i++ ) {    	   
    	   switch (inValue[i]) {
           case 'A':
               checkAlpha[0]++;             
               break;
               
           case 'C':
               checkAlpha[1]++;               
               break;
               
           case 'G':
               checkAlpha[2]++;                 
               break;
               
           case 'T':
               checkAlpha[3]++; 
               break;
       
           default:
               ;
       }
    	   if(checkAlpha[0]>=conditionAlpha[0]&& checkAlpha[1]>=conditionAlpha[1]&&checkAlpha[2]>=conditionAlpha[2]&&checkAlpha[3]>=conditionAlpha[3]){ //모든 조건 달성
               result++;
               break;
           }
       }  
        
        for(int i=1; i<=inValue.length-p; i++){ //첫 슬라이딩 윈도우  이후 마지막 슬라이딩 윈도우 까지 과정
        	
        	
        	switch (inValue[i-1]) {
            case 'A':
                checkAlpha[0]--; 
                break;
            case 'C':
                checkAlpha[1]--;
                break;
            case 'G':
                checkAlpha[2]--;
                break;
            case 'T':
                checkAlpha[3]--;
                break; 
        
            default:
                ;
        }
    
        	switch (inValue[i+p-1]) {
            case 'A':
                checkAlpha[0]++;
                break;
            case 'C':
                checkAlpha[1]++;
                break;
            case 'G':
                checkAlpha[2]++;
                break;  
            case 'T':
                checkAlpha[3]++;
                break;    
        
            default:
                ;
        }

        	if(checkAlpha[0]>=conditionAlpha[0]&& checkAlpha[1]>=conditionAlpha[1]&&checkAlpha[2]>=conditionAlpha[2]&&checkAlpha[3]>=conditionAlpha[3]){ //모든 조건 달성
                result++;             
            }             
        }
        System.out.println(result);

	}
}

