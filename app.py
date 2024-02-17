import re

# Read IPs.txt file
with open("IPs.txt", "r") as ips_file:
    ips_lines = ips_file.readlines()

# Read config.txt file
with open("config.txt", "r") as config_file:
    config_content = config_file.read()

# Process each line in IPs.txt
with open("results.txt", "a") as results_file:
    for line in ips_lines:
        ip_address = line.split(" - ")[2].strip()
        uuid_match = re.search(r"://([^@]+)", config_content)
        if uuid_match:
            uuid = uuid_match.group(1)
            modified_config = re.sub(r"://([^@]+)@([^:]+)", f"://{uuid}@{ip_address}", config_content)
            results_file.write(modified_config + "\n")

print("Processing complete. Check results.txt for the modified configurations.")

