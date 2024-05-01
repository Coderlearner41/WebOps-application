import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<dynamic> _userData = [];

  void fetchUsers() async {
    print('fetchUsers caught');
    const url = 'https://freetestapi.com/api/v1/students';
    final uri = Uri.parse(url);
    final response = await http.get(uri);
    final body = response.body;
    List<dynamic> json = jsonDecode(body);
    setState(() {
      _userData = json;
    });
    print ([_userData[3]]);
    print('fetchUsers completed');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          child: Text('REST API call'),
        ),
        backgroundColor: Colors.blue,
      ),
       body: ListView.builder(
        itemCount: _userData.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(_userData[index].toString()),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: fetchUsers,
        child: Icon(Icons.refresh),
      ),
    );
  }
}


