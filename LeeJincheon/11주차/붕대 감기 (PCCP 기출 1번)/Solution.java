class Solution {
    public int solution(int[] bandage, int health, int[][] attacks) {
        int n = attacks[attacks.length-1][0]; // 반복 횟수
        int answer = health; // 현재 체력
        int time = -1; // 시간
        int seq = -1; // 연속 성공 횟수
        int attackTimeIdx = 0;
        
        for (int i=0; i<=n; i++) {
            System.out.println("i = " + i);
            if (answer <= 0) { // 현재 체력이 0보다 작으면
                answer = -1; // -1을 리턴
                break;
            }
            
            time++;
            System.out.println("time = " + time);
            if (time != attacks[attackTimeIdx][0]) { // 공격 받지 않으면
                System.out.println("attack X");
                seq++; // 연속 성공 +1
                System.out.println("seq = " + seq);
                if (answer < health) { // 현재 체력이 전체보다 적으면
                    if (answer + bandage[1] <= health) { // (현재 체력+초당 회복)이 전체보다 작으면
                        answer += bandage[1]; // 현재 체력에 1초당 회복량을 더함
                    } else { // 전체 체력을 넘어가면
                        answer = health; // 현재 체력을 전체 체력으로 초기화
                    }
                }
                if (seq == bandage[0]) { // 연속 성공이 t이면
                    if (answer + bandage[2] <= health) { // (현재 체력+추가 회복)이 전체보다 작으면
                        answer += bandage[2]; // 현재 체력에 추가 회복을 더함
                        seq = 0; // 연속 성공 초기화
                        System.out.println("seq = " + seq);
                    } else { // 전체 체력을 넘어가면
                        answer = health; // 현재 체력을 전체 체력으로 초기화
                    }
                }
                System.out.println("answer = " + answer);
            } else { // 공격 받으면
                System.out.println("attack O");
                seq = 0; // 연속 성공 초기화
                System.out.println("seq = " + seq);
                answer -= attacks[attackTimeIdx][1]; // 현재 체력 - 피해량
                attackTimeIdx++;
                System.out.println("answer = " + answer);
            }
            if (answer <= 0) { // 현재 체력이 0보다 작으면
                answer = -1; // -1을 리턴
                break;
            }
        }
        System.out.println("result = " + answer);
        return answer;
    }
}