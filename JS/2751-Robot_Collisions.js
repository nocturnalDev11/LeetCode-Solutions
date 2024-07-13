/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    let robots = positions.map((pos, idx) => ({
        pos: pos,
        health: healths[idx],
        dir: directions[idx],
        idx: idx
    }));
    
    robots.sort((a, b) => a.pos - b.pos);

    let stack = [];
    let survived = new Map();
    
    for (let robot of robots) {
        if (robot.dir === 'R') {
            stack.push(robot);
        } else {
            while (stack.length > 0) {
                let top = stack[stack.length - 1];
                if (top.health > robot.health) {
                    top.health -= 1;
                    robot = null;
                    break;
                } else if (top.health < robot.health) {
                    robot.health -= 1;
                    stack.pop();
                } else {
                    robot = null;
                    stack.pop();
                    break;
                }
            }
            if (robot) {
                survived.set(robot.idx, robot.health);
            }
        }
    }
    
    // All remaining robots in the stack survive
    while (stack.length > 0) {
        let robot = stack.pop();
        survived.set(robot.idx, robot.health);
    }
    
    // Step 3: Collect the healths of the survived robots in the original order
    let result = [];
    for (let i = 0; i < positions.length; i++) {
        if (survived.has(i)) {
            result.push(survived.get(i));
        }
    }
    
    return result;
};
