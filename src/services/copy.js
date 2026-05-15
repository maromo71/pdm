import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'https://fajyrzsbeakhtgwowtxy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhanlyenNiZWFraHRnd293dHh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg4MDAxMTUsImV4cCI6MjA5NDM3NjExNX0.NOX-YH66qOfAUB3wl2U6bcJMmZSevJ8c8nV7YOV9b7w';

export const supabase = createClient(supabaseUrl, supabaseKey);