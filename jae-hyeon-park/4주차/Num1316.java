import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Num1316 {

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(bf.readLine());
		
		String[] words = new String[n];
		
		int result = 0;
		
		
		
		for(int i=0; i<n; i++) {
			words[i] = bf.readLine();
		}
		
		for(int i=0; i<n; i++) {
			String check = "";
			for(int j=0; j<words[i].length(); j++) {
				if(check.contains(Character.toString(words[i].charAt(j))) && check.charAt(check.length()-1) != words[i].charAt(j)) {
					break;
				}else {
					if(j==words[i].length()-1) {
						result++;
					}
					check += words[i].charAt(j);
				}
			}
		}
		
		System.out.println(result);

	}

}