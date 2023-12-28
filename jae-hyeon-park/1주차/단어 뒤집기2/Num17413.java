import java.io.*;
import java.util.*;

public class Num17413 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String data = br.readLine();	//받아온 문자열 
		//String data = "<helo> ho"; //사이트에 올리기전 테스트 용도
		
		StringBuilder sb = new StringBuilder(); //출력할 문자열
		Stack<Character> stack = new Stack<>(); //태그안의 문자가 아닌경우 넣을 스택
		
		boolean tagOpen = false; //태그 안인지 확인용도
		
		for(int i=0; i<data.length(); i++) {
			if(data.charAt(i) == '<') {
				tagOpen = true;
				
				while(!stack.isEmpty()) {
					sb.append(stack.pop());
				}
				sb.append(data.charAt(i));
			}
			else if(data.charAt(i) == '>') {
				tagOpen = false;
				sb.append(data.charAt(i));
				
			}
			else if(tagOpen == true) {
				sb.append(data.charAt(i));
			}
			else if(tagOpen == false) {
				
				if(data.charAt(i) == ' ') {
					while(!stack.isEmpty()) {
						sb.append(stack.pop());
					}
					sb.append(data.charAt(i));
				}
				else {
					stack.push(data.charAt(i));
				}
				
			}
			
		}
		
		while(!stack.isEmpty()) { //마지막 부분 꺽새(<>)안에가 아닌 그냥 문자열인경우
			sb.append(stack.pop());
		}
		
		System.out.println(sb);

	}

}