import java.io.*;
import java.util.*;

public class Num12891 {
    public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(bf.readLine());

        int s = Integer.parseInt(st.nextToken());
        int p = Integer.parseInt(st.nextToken());

        char[] inValue = bf.readLine().toCharArray(); //들어온 값을 하나씩 넣기

        int[] conditionAlpha =  {0, 0, 0, 0}; //필수 알파벳 개수 들어갈것 A,C,G,T 순

        int count = 0; //acgt가 모두 원하는 값만큼 달성했는지 확인용
        int result = 0;

        st = new StringTokenizer(bf.readLine());

        for(int i=0;i<4;i++){
            conditionAlpha[i] = Integer.parseInt(st.nextToken()); //필수 알파벳 개수 넣기
            if(conditionAlpha[i]==0){
                count++; //0인경우 미리 더해놓기
            }
        }

        //int[] checkAlpha = {conditionAlpha[0],conditionAlpha[1],conditionAlpha[2],conditionAlpha[3]};


        for(int i=0; i<=s-p; i++){
            int[] checkAlpha = {conditionAlpha[0],conditionAlpha[1],conditionAlpha[2],conditionAlpha[3]}; //다시 조건 리셋

            for(int j=i; j<p+i; j++){         //바뀌는 위치만큼 범위도 증가

            switch (inValue[j]) {
                case 'A':
                    checkAlpha[0]--;
                    if(checkAlpha[0] == 0){ //조건 달성시
                        count++;
                    }
                case 'C':
                    checkAlpha[1]--;
                    if(checkAlpha[0] == 0){ //조건 달성시
                        count++;
                    }
                case 'G':
                    checkAlpha[2]--;
                    if(checkAlpha[0] == 0){ //조건 달성시
                        count++;
                    }   
                case 'T':
                    checkAlpha[3]--;
                    if(checkAlpha[0] == 0){ //조건 달성시
                        count++;
                    }    
            
                default:
                    ;
            }

            if(count==4){ //모든 조건 달성
                result++;
                break;
            }
                

        }
        }

        System.out.println(result);

	}
}
