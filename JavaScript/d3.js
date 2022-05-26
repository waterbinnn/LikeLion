<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>D3</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
</head>
<body>
    <svg width="500" height="500"></svg>
    <script>
        const sampleData = [100, 10, 30, 50, 10, 70, 200, 90];
        const svg = d3.select('svg');

        sampleData.forEach((data, index) =>{
            svg.append('rect')
            .attr('height', data)
            .attr('width', 30)
            .attr('x', 40 * index + 100)//막대 생성좌표 x 막대의 좌측
            .attr('y', 300 - data + 100)//막대 생성 좌표 y 막대의 윗부분
        })
    </script>
</body>
</html>