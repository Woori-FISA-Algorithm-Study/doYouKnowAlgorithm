import java.util.*;

class Solution {
    public int[] solution(int[] numbers) {
        
        int[] answer = new int[numbers.length];
        Stack<Integer> stack = new Stack<>();
        
        for(int i=numbers.length-1; i>=0; i--){
            
            while(!stack.isEmpty()){
                if(numbers[i]<stack.peek()){
                    answer[i] = stack.peek();
                    break; // 입력은 한번만 가능, 스택은 비어있지 않은 상태
                }
                else{
                    stack.pop();
                }
                
            }
            
            if(stack.isEmpty()){
                answer[i] = -1;
            }
            stack.push(numbers[i]);
            
           
            
        }
       
        
        return answer;
    }
}
