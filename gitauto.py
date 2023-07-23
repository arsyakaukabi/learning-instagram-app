import subprocess

opsi = input("1: Upload to Repo\n2: Download from Repo\nChoose option: ")

if opsi == "1":
    commit_message = input('Enter commit message : ')
    try:
        subprocess.run(
            ["git", "add", "."], check=True
        )  # Add all changes to the staging area
        subprocess.run(
            ["git", "commit", "-m", commit_message], check=True
        )  # Commit changes with the provided message
        subprocess.run(
            ["git", "push", "origin", "main"], check=True
        )  # Push changes to the origin main branch
        print("Commit and push successful!")
    except subprocess.CalledProcessError as e:
        print("Commit and push failed. Error:", e)

elif opsi == "2":
    try:
        subprocess.run(["git", "fetch"], check=True)  # Fetch the latest changes from remote repository
        subprocess.run(
            ["git", "reset", "--hard", "origin/main"], check=True
        )  # Reset the local repository to match the remote main branch
        print("Pull from remote successful!")
    except subprocess.CalledProcessError as e:
        print("Pull from remote failed. Error:", e)
else:
    print("Invalid option!")
