import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Comparator<Character> comparator = (c1, c2) -> c1.compareTo(c2); 
		
		Map<Character, Integer> map = new TreeMap<>(comparator);
		
		String name = sc.next();
		int len = name.length();
		
		for(int i=0; i<len; i++) { // map에 입력받기
			char alpha = name.charAt(i);
			map.put(alpha, map.getOrDefault(alpha, 0) + 1);
		}
		
		boolean allEven = true;
		int oddCount = 0;
		char oddChar = ' ';
		char[] evenChar = new char[len];
		int idx = 0;
		
		// 각 알파벳의 개수가 모두 짝수인지. 홀수가 존재하면 홀수인 알파벳이 몇 개인지 확인
		for(char key : map.keySet()) {
			if(map.get(key)%2 != 0) { // 홀수이면
				oddChar = key;
				map.put(key, map.get(key) - 1); // 홀수인 알파벳 한 개를 res 배열의 중간에 넣어주므로 -1을 한다.
				allEven = false;
				oddCount++;
			}
			
			if (map.get(key)%2 == 0) { // 짝수이면
				for(int i=0; i<map.get(key); i++) {
					evenChar[idx] = key; // evenChar 리스트에 순서대로 넣음
					idx++;
				}
			}
		}
		
		char[] res = new char[len]; // 결과가 담길 배열
		int lt = 0; // res 배열의 왼쪽 포인터
		int rt = len - 1; // res 배열의 오른쪽 포인터
		
		if(len%2 == 0) { // 이름의 길이가 짝수인 경우
			if(allEven) { // 각 알파벳이 모두 짝수여야 함
				int toLt = 0;
				int toRt = 1;
				while(lt<rt) { // 양 끝에 채움
					res[lt] = evenChar[toLt];
					res[rt] = evenChar[toRt];
					toLt += 2;
          				toRt += 2;
					lt++;
          				rt--;
				}
				
				for(char c : res) {
					System.out.print(c);
				}
				
			} else {
				System.out.println("I'm Sorry Hansoo");
			}
		} else { // 이름의 길이가 홀수인 경우
			if(oddCount == 1) { // 홀수인 알파벳이 하나만 존재해야 함
				res[len/2] = oddChar; // Line[29]에서 -1을 하는 이유
				
				int toLt = 0;
				int toRt = 0;
        
				while(lt<rt) {
					res[lt] = evenChar[toLt];
					res[rt] = evenChar[toRt];
					toLt += 2;
          				toRt += 2;
					lt++;
          				rt--;
				}
				
				for(char c : res) {
					System.out.print(c);
				}
				
			} else {
				System.out.println("I'm Sorry Hansoo");
			}
		}
	}
}
