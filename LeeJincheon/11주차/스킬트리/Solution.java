import java.util.*;

class Solution {
    public int solution(String skill, String[] skill_trees) {
        int answer = 0;

        loop:
        for (String skillTree : skill_trees) {
            List<Character> skillOrder = new ArrayList<>();
            for (char c : skill.toCharArray()) {
                skillOrder.add(c);
            }

            for (char c : skillTree.toCharArray()) {
                if (skillOrder.contains(c)) {
                    if (c != skillOrder.get(0)) {
                        continue loop;
                    } else {
                        skillOrder.remove(0);
                    }
                }
            }
            answer++;
        }

        return answer;
    }
}
