import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'SUA URL';
const supabaseKey = 'SUA CHAVE API ANON';

export const supabase = createClient(supabaseUrl, supabaseKey);