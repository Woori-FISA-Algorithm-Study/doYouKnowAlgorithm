import java.util.*;

public class cake {
    public int solution(int[] topping) {
        Map<Integer, Integer> one = new HashMap<>();
        Map<Integer, Integer> two = new HashMap<>();
        
        for(int i : topping){ //뒤에꺼에 올인 해놓고 하나씩 one이 가져가는식으로 확인
            two.put(i, two.getOrDefault(i,0)+1);
        }
        
        int count = 0;
        for(int i : topping){
            one.put(i, one.getOrDefault(i,0)+1); //one이 하나씩 가지는 구조
            
            if(two.get(i) == 1){ // two가 뺏기다가 하나남으면 마지막 하나 뺏기는거라 제거
                two.remove(i);
            }
            else{ //2개이상이면 개수 하나 차감
            two.put(i, two.get(i)-1);
            }
            
            if(one.size() == two.size()){
                count++;
            }
            
        }
        
        
        return count;
    }
    
}
