FROM grafana/k6:latest

# Use root for debugging so we can list all files
USER root
WORKDIR /home/k6

# Copy everything
COPY . .

# DEBUG STEP: This will list all files in the container and then exit.
# It helps you verify if the 'data' folder actually exists at /home/k6/data/
RUN ls -R /home/k6

ENTRYPOINT ["k6", "run", "./test/sample.ts"]