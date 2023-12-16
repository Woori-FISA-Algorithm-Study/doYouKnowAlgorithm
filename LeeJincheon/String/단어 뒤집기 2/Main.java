import java.util.*;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		Stack<Character> stk = new Stack<>();
		ArrayList<Character> res = new ArrayList<>();
		
		String s = sc.nextLine() + " ";
		int len = s.length();
		
		boolean isTag = false;
		
		for(int i=0; i<len; i++) {
			if(s.charAt(i) == '<') {
				while(!stk.isEmpty()) {
					res.add(stk.pop());
				}
				isTag = true;
			} else if(s.charAt(i) == '>') {
				res.add(s.charAt(i));
				isTag = false;
				continue;
			}
			
			if(isTag) {
				res.add(s.charAt(i));
			} else {
				if(s.charAt(i) != ' ') {
					stk.add(s.charAt(i));
				} else {
					while(!stk.isEmpty()) {
						res.add(stk.pop());
					}
					res.add(' ');
				}
			}
		}
		
		for(char c : res) {
			System.out.print(c);
		}
	}
}
