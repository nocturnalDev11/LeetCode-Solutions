#include <vector>
#include <string>

class Solution {
private:
    std::vector<std::string> answers;
    std::string number;
    int targetValue;

    void recursiveSearch(size_t index, long long prevOperand, long long currentTotal, std::string expression) {

        if (index == number.size()) {
            if (currentTotal == targetValue) {
                answers.push_back(expression);
            }
            return;
        }

        for (size_t i = index; i < number.size(); ++i) {
            if (i != index && number[index] == '0') {
                break;
            }

            long long nextOperand = std::stoll(number.substr(index, i - index + 1));

            if (index == 0) {
                recursiveSearch(i + 1, nextOperand, nextOperand, expression + std::to_string(nextOperand));
            } else {
                recursiveSearch(i + 1, nextOperand, currentTotal + nextOperand, expression + "+" + std::to_string(nextOperand));

                recursiveSearch(i + 1, -nextOperand, currentTotal - nextOperand, expression + "-" + std::to_string(nextOperand));

                recursiveSearch(i + 1, prevOperand * nextOperand, currentTotal - prevOperand + prevOperand * nextOperand, expression + "*" + std::to_string(nextOperand));
            }
        }
    }

public:
    std::vector<std::string> addOperators(std::string num, int target) {
        answers.clear();
        number = num;
        targetValue = target;

        recursiveSearch(0, 0, 0, "");
        return answers;
    }
};
