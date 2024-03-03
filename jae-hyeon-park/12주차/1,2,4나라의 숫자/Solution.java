class Solution {
    public String solution(int n) {
        
        String[] setting = {"4", "1", "2"};
        
        int num = n;
        String answer = "";
        
        while(num>0){
            int remain = num%3;
            String m = setting[remain];
            num = num/3;
            
            if(remain == 0){ // 3이면 while문 한번 더 돔 - 1,2,4순으로 세번 돌면 자릿수 바뀌어야 함으로
                num--;
            }
            
            answer = m + answer;
        }
        
        
        return answer;
    }
}