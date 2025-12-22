FROM grafana/k6:latest

USER root
WORKDIR /home/k6

COPY . .

RUN ls -R /home/k6

ENTRYPOINT ["k6", "run", "./test/perf-tests.ts"]