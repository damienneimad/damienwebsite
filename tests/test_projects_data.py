import json
import unittest
from pathlib import Path

class TestProjectsData(unittest.TestCase):
    def _check_file(self, path: Path):
        with path.open() as f:
            data = json.load(f)
        self.assertIsInstance(data, list)
        for idx, project in enumerate(data):
            self.assertIsInstance(project, dict, f"{path} entry {idx} not dict")
            for key in ("name", "url", "description"):
                self.assertIn(key, project, f"{path} entry {idx} missing '{key}'")

    def test_root_projects(self):
        base = Path(__file__).resolve().parent.parent
        self._check_file(base / "projects_data.json")

    def test_portfolio_projects(self):
        base = Path(__file__).resolve().parent.parent
        self._check_file(base / "portfolio" / "projects_data.json")

if __name__ == "__main__":
    unittest.main()
