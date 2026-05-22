import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
// Substitua pelas suas chaves do painel do Supabase (Project Settings > API)
const supabaseUrl = 'Sua Base Url Aqui';
const supabaseKey = 'Chave Anon Pública aqui';
export const supabase = createClient(supabaseUrl, supabaseKey);