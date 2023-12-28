import java.io.*;



public class Num1213 {

	public static void main(String[] args) throws IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		String data = bf.readLine(); //들어온 값
		//String data = "CCABB";
		
		StringBuilder sb = new StringBuilder(); //결과값 넣을 곳
		int[] alpha = new int[26];
		
		int oddNum = 0, oddNumIndex = 0; //oddNum 홀수 개수 한개 이상인 경우 실패문구를 위함, oddNumIndex 홀수인 알파벳의 인덱스
		
		
		
		for(int i=0; i<data.length(); i++) { //알파벳 개수 확인용 반복문
			int index = data.charAt(i) - 'A'; //A면 0인 index 들어가게 하기 위함
			alpha[index]++; //해당 알파벳 수 증가 (알파벳 개수 확인)
		}
		
		for(int i=0; i<alpha.length; i++) { //홀수 알파벳 확인 반복문
			if(alpha[i]%2 !=0) {
				oddNum++; //홀수 개수 추가
				oddNumIndex = i;
			}
			if(oddNum > 1) { //홀수 알파벳 한개 이상인 경우 실패 띄우고 끝내기
				System.out.println("I'm Sorry Hansoo");
				return;
			}
		}
		
		for(int i=0; i<alpha.length; i++) {
			for(int j=0; j<alpha[i]/2; j++) { // 해당 알파벳의 개수를 두개로 나누어 하나는 앞쪽 하나는 반대쪽으로 reverse해서 붙일 예정
				sb.append((char) (i+'A')); //인덱스에 + 'A'를 통해 알파벳 찾아주고 sb에 추가 , char로 형변환
			}
		}
		String result = sb.toString();
		
		String reverseString = sb.reverse().toString(); //반대쪽 값 준비 -> 문제점 발견 reverse를 쓸 경우 기존의 값도 뒤집히면서 적용됨 
		
		if(oddNum ==1) {
			result = result + (char) (oddNumIndex + 'A'); //홀수개 가지고 있는 알파벳 result에 추가
		}
		
		//sb.append(reverseString); //반대쪽 합치기
		result = result + reverseString;
		
		System.out.println(result);
		
		
		

	}
}