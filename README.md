
        <main>
            <h2>Hey there 👋</h2>
            <p>I'm Damien — a curious builder, coder, and lifelong learner.<br>
            I’ve worn a few hats over the years: mechatronic engineer, project manager, bike modder, smart farming hacker…<br>
            Now? I’m writing Python, automating workflows, and exploring ways to blend design, tech, and sustainability.</p>
        
            <p>🌱 Former construction lead turned code nerd<br>
            🚲 Bikes, tools, and DIY always close by<br>
            🛠️ Passionate about simple, smart solutions<br>
            📍 Berlin-based, family-centered, nature-connected</p>
        
            <p>Drop a ⭐️, fork something cool, or just say hi!</p>

            <p><a href="https://www.linkedin.com/in/damienlando/">View my LinkedIn Profile</a></p>

## Running tests

The repository provides a small Python unit test that verifies the structure of
the `projects_data.json` files. To execute it, ensure Python 3 is installed and run:

```bash
python -m unittest discover -s tests
```

This command will load both JSON files and check that each project includes the
`name`, `url`, and `description` keys.
