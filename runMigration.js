import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conectare DB
const DB_URI = process.env.DB_URI || 'mongodb://localhost:27017/appdb';

mongoose.connect(DB_URI)
  .then(async () => {
    console.log('Connected to DB');

    // Folder migrations
    const migrationsDir = path.join(__dirname, 'migrations');
    const files = fs.readdirSync(migrationsDir)
      .filter(f => f.endsWith('_create_leagues.js'))
      .sort();

    if (files.length === 0) {
      console.log('No migration files found');
      mongoose.disconnect();
      return;
    }

    // Ultimul fișier
    const latestMigration = files[files.length - 1];
    const migrationPath = path.join(migrationsDir, latestMigration);

    // Import dinamic
    const migration = await import(`./migrations/${latestMigration}`);
    await migration.up();

    console.log(`Migration ${latestMigration} ran successfully`);
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
